import { NextResponse } from 'next/server';

export async function GET() {
  // In a real application, you should be careful about which variables you expose.
  // For this testing purpose, we will expose specific variables.
  const envVars = {
    MY_VAR_FROM_YAML: process.env.MY_VAR_FROM_YAML || 'not set',
    ANOTHER_VAR: process.env.ANOTHER_VAR || 'not set',
    API_KEY_TEST: process.env.API_KEY_TEST || 'not set',
    DB_HOST: process.env.DB_HOST || 'not set',
    DB_PORT: process.env.DB_PORT || 'not set',
    FEATURE_FLAG_NEW_UI: process.env.FEATURE_FLAG_NEW_UI || 'not set',
    MAX_RETRY_ATTEMPTS: process.env.MAX_RETRY_ATTEMPTS || 'not set',
    NODE_ENV: process.env.NODE_ENV || 'not set',
  };

  return NextResponse.json(envVars);
}
