'use client' 
import Header from "@/components/Header";
import ReviseDashboard from "@/components/reviseDashboard"
import { useRouter } from "next/navigation"
import { useSearchParams } from 'next/navigation'
export default function Revise() {
    const router= useRouter()
    const searchParams = useSearchParams()
    const bannerId = searchParams.get('bannerId')
    console.log('bannnerID===',bannerId)

    const dispatch = useDispatch();
    // useEffect(()=>{
      
    //     console.log('Use effect сработал при рефреше страницы')
    //     const token=localStorage.getItem('token')
    //     // console.log('22pofile token',token)
    //     if(token){
    //         let decodedToken=jwtDecode(token)
    //         console.log('layoutPage=  decodedToken==',decodedToken)
            
    //         dispatch(authorize({token}))
            
    //     }
    //     else{
    //         localStorage.removeItem('token')
    //     }
    // },[])  
  


    return (
        <>
           <Header loggedIn={'inspector'}/>
           <br />
            {/* <ReviseDashboard bannerId={bannerId}/> */}
            <ReviseDashboard bannerId={bannerId}/>
        </>
    )
}
