import { AuthService } from './auth.service';

export function accountLoader(authService: AuthService) {
    return () => (authService.getAccountAsync()).toPromise().catch((error) => {
        return true;
    });
}
