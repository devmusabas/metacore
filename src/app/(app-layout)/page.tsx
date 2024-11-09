// import { jwtDecode } from 'jwt-decode';

import { Homepage } from '@/components/Homepage';

// import WhyMetacore from '@/components/WhyMetacore';
// import { createClient } from '@/utils/supabase/server';

export default async function Page(): Promise<JSX.Element> {
  //   const supabase = await createClient(); // Await the promise

  //   const {
  //     data: { subscription: authListener },
  //   } = supabase.auth.onAuthStateChange(async (event, session) => {
  //     if (session) {
  //       const jwt = jwtDecode(session.access_token);
  //       const userRole = jwt.sub;
  //     }
  //   });

  return (
    <>
      {/* <div className="m-20">
        <ul className="text-red-500">
          {todos?.map(({ todo }) => <li key={todo}>{todo}</li>)}
        </ul>
      </div> */}
      {/* <WhyMetacore /> */}
      <Homepage />
    </>
  );
}
