## Task: Handle Rate-Limit Errors with User Feedback

### Objective
Implement a solution that detects HTTP 429 Too Many Requests errors and provides clear feedback to users when API rate limits are exceeded.

### Requirements
Detect 429 status code responses from API calls. Prevent additional requests while rate limit is active. Display user-friendly message indicating rate limit status. Show estimated wait time before requests can resume. Track request count and limit state throughout the session.

### Implementation Details
Create a rate limit handler that intercepts fetch responses. Extract rate limit information from response headers if available. Implement exponential backoff or wait strategy. Provide UI feedback mechanism for rate limit events. Handle both manual API calls and automated request scenarios.

### Expected Behavior
When a 429 error occurs, the application prevents new requests from being made. User sees clear message about rate limit status. Application shows countdown or time remaining until limit resets. Once the limit window passes, normal operation resumes automatically.

### Testing
Simulate rapid API requests to trigger rate limit condition. Verify that requests are blocked after limit threshold. Confirm user feedback appears and disappears appropriately. Test that normal operation resumes after rate window resets.
