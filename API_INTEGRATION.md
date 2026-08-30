# CySKILLS-AI — Backend API Integration & Migration Guide

This guide outlines the technical contracts, authentication flow, REST endpoint specifications, and migration steps required to integrate a live backend with the CySKILLS-AI frontend.

---

## 1. Authentication & Security Architecture

### 1.1. JWT Bearer Authentication Flow
1. The user logs in via `POST /api/v1/auth/login` providing email, password, and role.
2. The server responds with a JWT `accessToken` and user object.
3. The frontend stores user credentials in `sessionStorage` and automatically injects the `Authorization: Bearer <accessToken>` header on all subsequent requests via `src/services/apiClient.ts`.

### 1.2. Environment Configuration
Create a `.env` file in the project root:

```env
VITE_API_BASE_URL=https://api.cyskills.gov.cy/v1
VITE_AI_STREAMING_URL=https://api.cyskills.gov.cy/v1/ai/stream
```

---

## 2. Service Layer Contracts & REST Endpoints

### 2.1. Authentication (`src/services/authService.ts`)

| Method | Endpoint | Description | Request Body | Response Body |
| :--- | :--- | :--- | :--- | :--- |
| `POST` | `/api/v1/auth/login` | Authenticate user credentials | `{ email, password, role }` | `ApiResponse<{ user: User, token: string }>` |
| `POST` | `/api/v1/auth/logout` | Revoke active token | `{}` | `ApiResponse<{ success: true }>` |
| `GET` | `/api/v1/auth/me` | Fetch authenticated profile | None | `ApiResponse<User>` |
| `PUT` | `/api/v1/users/profile` | Update profile information | `EditProfileData` | `ApiResponse<User>` |

---

### 2.2. Government / MESY Services (`src/services/mesyService.ts`)

| Method | Endpoint | Description | Query Parameters |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/v1/mesy/coverage-stats` | Aggregated national KPIs | None |
| `GET` | `/api/v1/mesy/programme-domain-supply` | Field of study supply breakdowns | `?year=2026` |
| `GET` | `/api/v1/mesy/employment-rates` | Graduate employment rates | None |
| `GET` | `/api/v1/mesy/esco-skills` | ESCO skill taxonomy mappings | `?search=&field=&page=1&limit=20` |
| `GET` | `/api/v1/mesy/district-summaries` | Labour market demand by district | `?district=Nicosia` |
| `GET` | `/api/v1/mesy/policy-indicators` | Target progress for EU 2030 Agenda | None |
| `POST` | `/api/v1/mesy/policy-indicators` | Create new policy target | `PolicyTargetPayload` |

---

### 2.3. Graduate Services (`src/services/graduateService.ts`)

| Method | Endpoint | Description | Query Parameters / Body |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/v1/graduate/career-paths` | Personalized career progression paths | `?userId={id}` |
| `GET` | `/api/v1/graduate/job-opportunities` | Matched job openings | `?search=&location=&tags=&page=1` |
| `GET` | `/api/v1/graduate/learning-paths` | Recommended upskilling courses | `?skillGap={gapId}` |
| `GET` | `/api/v1/graduate/skill-gaps` | Market vs. user skill comparisons | None |
| `POST` | `/api/v1/graduate/saved-jobs` | Bookmark a job posting | `{ jobId: string }` |
| `DELETE`| `/api/v1/graduate/saved-jobs/{jobId}` | Remove bookmarked job | None |

---

### 2.4. HEI Services (`src/services/heiService.ts`)

| Method | Endpoint | Description | Request / Query |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/v1/hei/curriculum-alignment` | Program alignment projections | `?institutionId={id}` |
| `GET` | `/api/v1/hei/programs` | List institutional programs | `?faculty={faculty}` |
| `GET` | `/api/v1/hei/programs/{id}/courses` | Course syllabus and skill tags | None |
| `POST` | `/api/v1/hei/curriculum/generate` | Generate AI curriculum proposal | `{ programId: string }` |
| `POST` | `/api/v1/hei/curriculum/action` | Apply accept/modify/reject action | `{ action, moduleId, modifications }` |

---

### 2.5. AI Assistant Services (`src/services/aiService.ts`)

| Method | Endpoint | Description | Payload |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/v1/ai/chat` | Send conversational query | `{ message: string, history: ChatMessage[], contextRole: string }` |
| `GET` | `/api/v1/ai/history` | Fetch conversation threads | None |

---

## 3. Standard Response Envelope

All backend APIs should conform to the standardized TypeScript response wrapper:

```typescript
export interface ApiResponse<T = unknown> {
    success: boolean;
    data: T;
    message?: string;
    errors?: string[];
    timestamp: string;
}
```

### Error Response Example (HTTP 400 / 422 / 500)
```json
{
    "success": false,
    "data": null,
    "message": "Validation failed on the submitted policy target.",
    "errors": [
        "currentValue must be a numeric value between 0 and 100",
        "targetEntity is required"
    ],
    "timestamp": "2026-08-30T10:00:00Z"
}
```

---

## 4. Seamless Step-by-Step Migration to Live Backend

To switch from mock mode to live backend integration:

1. **Step 1**: In `src/services/apiClient.ts`, verify the `API_BASE_URL` is pointing to your backend gateway.
2. **Step 2**: In each service file (e.g. `src/services/mesyService.ts`), replace the `simulateDelay(...)` call with direct `apiClient<T>(endpoint)` invocations:
   ```typescript
   // Before (Mock Mode):
   export async function getNationalCoverageStats(): Promise<CoverageStat[]> {
       await simulateDelay(200);
       return nationalCoverageStats;
   }

   // After (Live API Mode):
   export async function getNationalCoverageStats(): Promise<CoverageStat[]> {
       return await apiClient<CoverageStat[]>("/mesy/coverage-stats");
   }
   ```
3. **Step 3**: No changes are required in any page or component! Since all pages consume the standardized service contracts, the transition is completely transparent.

