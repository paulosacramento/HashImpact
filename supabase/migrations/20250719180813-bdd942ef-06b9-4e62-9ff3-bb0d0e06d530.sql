
-- Create the hardcoded admin account directly in Supabase Auth
-- This bypasses the public signup form and creates your account securely
INSERT INTO auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  created_at,
  updated_at,
  confirmation_token,
  email_change,
  email_change_token_new,
  recovery_token
) VALUES (
  '00000000-0000-0000-0000-000000000000',
  gen_random_uuid(),
  'authenticated',
  'authenticated',
  'paulosacramento@gmail.com',
  crypt('eybhxqqsfqadkltsorvy999', gen_salt('bf')),
  NOW(),
  NOW(),
  NOW(),
  '',
  '',
  '',
  ''
);

-- Also create the identity record for email authentication
INSERT INTO auth.identities (
  provider_id,
  user_id,
  identity_data,
  provider,
  last_sign_in_at,
  created_at,
  updated_at
) VALUES (
  'paulosacramento@gmail.com',
  (SELECT id FROM auth.users WHERE email = 'paulosacramento@gmail.com'),
  '{"sub": "' || (SELECT id FROM auth.users WHERE email = 'paulosacramento@gmail.com') || '", "email": "paulosacramento@gmail.com", "email_verified": true, "phone_verified": false}',
  'email',
  NOW(),
  NOW(),
  NOW()
);
