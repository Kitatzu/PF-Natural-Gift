import { useEffect } from "react";
import { messaging } from "../firebase"
import { getToken, onMessage } from "firebase/messaging"
import { getAuth, signInAnonymously } from "firebase/auth"
import {ToastContainer, toast} from "react-toastify"

function Firebase() {


    const loguearse = () =>{
        signInAnonymously(getAuth()).then(usuario => console.log(usuario))
    }    
    async function requestPermission(){
        const permission = await Notification.requestPermission()
        if(permission === "granted"){
            const token = await getToken(messaging, {vapidKey: "BH-seCiEmqd242jwHd0XRHemtBHRh4ZGKWDgPU4zcaGVMnM9WkDFGd6xSDWlAN6k4TD2v1KdlIToRhNmyD8wR4Y" })
            console.log("Token gen =", token)

        }else if(permission === "denided"){
            alert("you denied for the notification")
        }
    }

    useEffect(() => {
       requestPermission()
       onMessage(messaging, message =>{
        console.log("tu mensaje:", message)
        toast(message.notification.body)
       })
    }, [])
    
    return (
        <div>
    <div>
      <h2>Naza The Boss</h2>
      <ToastContainer />
    </div>;
    </div>
    )
}


export default Firebase;