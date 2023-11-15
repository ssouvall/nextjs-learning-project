import { DefaultSession, DefaultUser} from 'next-auth';
import { JWT, DefaultJWT } from 'next-auth/jwt';

declare module "next-auth" {
    interface Session {
        accessToken: string,
        user: {
            id: string,
            name: string,
            email: string
        } & DefaultSession
    }
}
