<template>
    <div class="bg-[#707070]">
        <div class="w-2/3 pl-16 mx-auto pt-10 pb-12 font-light text-lg">
            <h2 class="text-2xl font-bold">Enviar Email</h2>
            <label class="w-1/3 text-right">Ingresa tu direccion de correo electronico para enviar email</label>
            <form @submit.prevent="sendEmail">
                <input v-model="email" type="email" required class="border rounded w-full p-1" />
                <button type="submit" class="bg-white text-[#707070] border border-[#707070] p-2 rounded">Enviar</button>
            </form>
        </div>
    </div>
</template>

<script>

//import {defineEventHandler} from '@/server/api/send'

export default {
    data() {
        return {
            email: ''
        }
    },

    methods: {

        async sendEmail() {
            const response = await fetch('api/send', {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                    auyhorization: "Bearer " + process.env.RESEND_API_KEY
                },
                body: JSON.stringify({ email: this.email }), // body data type must match "Content-Type" header
            });

            const data = response.json(); // parses JSON response into native JavaScript objects
            //console.log(data)
            return data
        }
    }

}

</script>