import { AuthService } from 'app/core/services';

export function accountLoader(authService: AuthService) {
    return () => (authService.getAccountAsync()).toPromise().catch((error) => {
        return true;
    });
}
