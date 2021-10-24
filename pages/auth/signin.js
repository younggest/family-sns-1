import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Header from "../../components/Header";

function signIn({ providers }) {
  return (
    <div>
      <>
      <Header />

      <div className='flex flex-col items-center justify-center min-h-screen py-2 -mt-0 px-14 text-center'>
        <img className="w-80" src="https://links.papareact.com/ocw" alt="" />
        <p className='font-xs italic'>
          이 서비스는 백현빈이 만들었고, 인스타그램을 따라만든 서비스입니다.
        </p>

        <div className='mt-40'>
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button className='p-3 bg-blue-500 rounded-lg text-white' onClick={() => SignIntoProvider(provider.id, { callbackUrl: '/' })}>
                {provider.name}로 로그인하기
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
    </div>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers
    }
  }
}

export default signIn
