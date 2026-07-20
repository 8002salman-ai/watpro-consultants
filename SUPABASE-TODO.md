# TODO: Supabase Backend Migration (pending — user will start later)

Status as of 2026-07-20: **Not started. Waiting for user to create/share Supabase project.**

## Current state (what exists today)
- Auth (client + admin), training registrations, and contact messages all live in
  browser localStorage only (`src/context/AuthContext.tsx`, `src/utils/store.ts`).
- Storage keys: `watpro_users_v2`, `watpro_sessions_v2`, `watpro_registrations_v1`, `watpro_messages_v1`.
- Seeded accounts (localStorage defaults):
  - Admin: admin@watproconsultants.com / Admin123@@@
  - Client: 8002salman@gmail.com / Client123@@@
- Limitation: data is per-browser; admin cannot see signups/messages from other devices.

## What was checked (2026-07-20)
- No Supabase login/token on this machine (`~/.supabase` has only telemetry, no access-token).
- No Cloudflare/wrangler config found.
- No .env files in the repo. Vercel CLI not logged in either.

## Migration plan (when user provides credentials)
1. User supplies Supabase **Project URL** + **anon public key** (Dashboard → Settings → API),
   or runs `npx supabase login` so CLI can access projects.
2. `npm install @supabase/supabase-js`; create `src/lib/supabase.ts` with the URL + anon key.
3. Replace localStorage auth with Supabase Auth (email/password):
   - Create the two accounts above in Supabase Auth; mark admin via `app_metadata.role = 'admin'`
     or a `profiles` table with a role column.
4. Tables: `profiles` (id, name, organization, role), `registrations`, `contact_messages`
   with RLS: clients read/write own rows; admin role reads all.
5. Update `AuthContext.tsx`, `utils/store.ts`, ClientLogin/Signup, AdminLogin/Dashboard, Contact,
   TrainingCalendar to use Supabase queries instead of localStorage.
6. Keep HashRouter + single-file build unchanged; env vars can be inlined at build time
   (VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY — anon key is safe to expose).
