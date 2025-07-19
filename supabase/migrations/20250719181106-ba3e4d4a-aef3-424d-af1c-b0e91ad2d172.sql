-- Remove any previous attempts (just in case)
DELETE FROM auth.identities WHERE provider_id = 'paulosacramento@gmail.com';
DELETE FROM auth.users WHERE email = 'paulosacramento@gmail.com';

-- Use Supabase's auth.signup function to properly create the admin account
-- This ensures proper password hashing and all required auth records
SELECT auth.signup(
  'paulosacramento@gmail.com',
  'eybhxqqsfqadkltsorvy999',
  '{"email_confirm": true}'::jsonb
);

-- Confirm the email immediately so the account can be used
UPDATE auth.users 
SET email_confirmed_at = NOW(), 
    confirmation_token = '',
    confirmed_at = NOW()
WHERE email = 'paulosacramento@gmail.com';