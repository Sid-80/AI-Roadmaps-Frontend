import { USER } from "@/types"
import { useMutation } from "@tanstack/react-query"
import { createNewUser } from "../Backend/api"

export const useSignIn = () => {
    return useMutation({
        mutationFn : (User:USER) => createNewUser(User)
    })
}