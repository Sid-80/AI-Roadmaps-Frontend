import { LoginUser, USER } from "@/types"
import { useMutation } from "@tanstack/react-query"
import { createNewUser, loginUser } from "../Backend/api"

export const useSignIn = () => {
    return useMutation({
        mutationFn : (User:USER) => createNewUser(User)
    })
}

export const useLoginUser = () => {
    return useMutation({
        mutationFn : (User:LoginUser) => loginUser(User.username,User.password)
    })
}