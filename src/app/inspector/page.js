'use client' 
import Header from "@/components/Header";
import InspectorDashboard from "@/components/inspectorDashboard"
export default function Layout() {
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
            <InspectorDashboard/>
        </>
    )
}
