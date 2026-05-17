# School Fee Management - ST THOMAS ACADEMY FARDPUR

Production-ready Next.js + Supabase fee management app with mobile-first UI.

## Features
- Supabase Auth + role-aware RLS (`admin`, `staff`, `viewer`)
- Student master CRUD
- Payment entry with auto receipt number (`STAF-YYYY-0001`)
- Receipt records
- Dashboard summaries from SQL views
- Due and class report data via views
- WhatsApp & SMS ready workflow placeholders in settings schema
- Vercel-ready Next.js app

## Setup
1. Install dependencies
```bash
npm install
```
2. Configure environment variables in `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_SCHOOL_NAME=ST THOMAS ACADEMY FARDPUR
```
3. Run SQL migration in Supabase SQL Editor:
- `supabase/migrations/202605170001_init.sql`

4. Start dev server:
```bash
npm run dev
```

## Deploy to Vercel
- Push repo to GitHub.
- Import into Vercel.
- Add all env vars in Vercel project settings.
- Deploy.

## WhatsApp API later
- Store Cloud API token, phone number ID, business account ID, template name, language in `school_settings.whatsapp_settings` JSON.
- Replace `wa.me` link with server action/API integration.

## SMS API later
- Store provider, sender/template/entity IDs and API key in `school_settings.sms_settings`.
- Add provider adapters for MSG91/Twilio/Fast2SMS.

## Notes
- Current reminder flow can use mobile deep links:
  - WhatsApp: `https://wa.me/91PHONE?text=...`
  - SMS: `sms:+91PHONE?body=...`
