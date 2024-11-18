import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async() => {
  const session = await getServerSession(authOptions)
 console.log(session)
  return (
    <div>
     { session?.user &&
      <>
       <h1 className="text-4xl text-center mt-10">Welcome To {session?.user?.name}</h1>
      <h1 className="text-4xl text-center mt-10">User Email : {session?.user?.email}</h1>
      <Image className="mx-auto mt-5 rounded-full" src={session?.user?.image} alt="user image" height={200} width={200}/>
      </>
     }
    </div>
  );
};

export default DashboardPage;
