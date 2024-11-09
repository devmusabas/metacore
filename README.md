# EduTrack

EduTrack is a web application designed to facilitate educational tracking and management. It provides features for user authentication, email confirmation, and data management using Tan Stack Query for efficient data fetching and state management.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Components](#components)
  - [ConfirmEmailPage](#confirmemailpage)
  - [Other Components](#other-components)
- [Setup](#setup)
- [Running the Application](#running-the-application)
- [Testing](#testing)

## Features

- User authentication with email confirmation.
- Efficient data fetching and state management using Tan Stack Query.
- Responsive design for a seamless user experience.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Next.js**: A React framework for server-side rendering and static site generation.
- **Tan Stack Query**: A powerful data-fetching library for React.
- **Supabase**: An open-source Firebase alternative for backend services.

## Components

### ConfirmEmailPage

- **File**: `src/app/(auth-layout)/auth/confirm/page.tsx`
- **Purpose**: Handles the email confirmation process for users.
- **Functions**:
  - `confirmEmail(token: string | null)`: Verifies the email confirmation token using Supabase. Throws errors if the token is invalid or missing.
- **Job**:
  - Retrieves the confirmation token from the URL.
  - Uses `useQuery` from Tan Stack Query to fetch the confirmation status.
  - Displays appropriate messages based on the confirmation result (loading, success, or error).

### Other Components

- **Authentication Components**: Additional components for user login, registration, and profile management (not detailed here but typically included in an educational tracking app).
- **Dashboard**: A component to display user-specific data and analytics related to their educational progress.
- **Profile Management**: Components for users to manage their profiles, including updating personal information and preferences.

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/eduTrack.git
   cd eduTrack
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your Supabase project and configure the environment variables in a `.env.local` file.

## Running the Application

To start the development server, run:

```
npm run dev
```

Visit `http://localhost:3000` in your browser to view the application.

## Testing

To run the tests, use:

```
npm run test
```

This will execute the unit tests for the components, ensuring that the application behaves as expected.

## Conclusion

EduTrack is designed to provide a robust platform for educational tracking, leveraging modern technologies for a seamless user experience. Each component plays a crucial role in ensuring the application is functional, user-friendly, and efficient.
