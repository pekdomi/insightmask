<script setup>
import { ref, reactive } from 'vue'
var state = ref({
    company_name_: '',
    email_address_: '',
    message_: ''
})


const NewMessage = () => {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
            // "auth-token" : state.token
        },
        body: JSON.stringify({
            companyName: state.value.company_name_,
            emailAddress: state.value.email_address_,
            message: state.value.message_
        })
    }
    fetch("http://localhost:3000/message/newmsg",
        requestOptions)}

const CheckForm = () => {
    if (state.value.company_name_ != '' && state.value.message_ != '') {
        isVisible = true
        console.log("now")
    }
}
console.log(state)



let isVisible = ref(false);

</script>


<template>
    <div className="justify-center mt-10 ml-10 mr-10">
        <form>

            <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Címzett cég neve</label>
                    <input v-model="state.company_name_" type="text" id="company"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Cég neve..." required>
                </div>
                <!--
                <div>
                    <label for="identifier" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Felek közti egyedi azonosító*</label>
                    <input v-model="state.uniqueID"
                        type="" id="identifier"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Azonosító...">
                </div>
-->
            </div>

            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    E-mail cím*</label>
                <input v-model="state.email_address_" type="email" id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="minta@minta.com">
            </div>
            <p class="mb-6">*Nem kötelező. A kiválasztott cég csak ennek megadásakor tud válaszolni.</p>

            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Üzenet</label>
            <textarea v-model="state.message_" id="message" rows="6"
                class="mb-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Üzenetét írja ide..." required></textarea>

            <div class="flex items-start mb-6">
                <div class="flex items-center h-5">
                    <input id="remember" type="checkbox" value=""
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        required>
                </div>

                <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Elolvastam és elfogadom <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">
                        az adatvédelmi tájékoztatót</a>.</label>
            </div>

            <button @click="CheckForm()" type="submit"
                class="ml-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Ellenőrzés</button>
                <button @click="NewMessage()" v-if="isVisible" type="button" class="ml-3 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                Bejelentés</button>
    
        </form>
        
        <div>

            <div>{{ state.companyName }}</div>
            <div>{{ state.uniqueID }}</div>
            <div>{{ state.emailAddress }}</div>
            <div>{{ state.message }}</div>
        </div>

    </div>
</template>