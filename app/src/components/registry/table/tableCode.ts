import type { ComponentCode } from "@/types/index";

export const tableCode: ComponentCode = {
    'table/Default':{
        lang:"html",
        name:"index.html", 
        code:`
<div class="relative overflow-x-auto rd-md  b bdr-high wfull">
    <table class="w-full text-body text-left">
        <thead
            class="capitalize font-medium text-sm text-title py-2 b-b bdr_b-high rd-t-md">
            <tr>
                <th scope="col" class="px-5 py-2.5">
                    ID
                </th>
                <th scope="col" class="px-5 py-2.5">
                    Name
                </th>
                <th scope="col" class="px-5 py-2.5">
                    Title
                </th>
                <th scope="col" class="px-5 py-2.5">
                    Email
                </th>
            </tr>
        </thead>
        <tbody class="text-sm divide-y divide-gray-200 dark:divide-gray-800">
            <tr>
                <th scope="row"
                    class="px-5 py-2.5 font-medium text-title whitespace-nowrap">
                    1.
                </th>
                <td class="px-5 py-2.5">
                    John Doe
                </td>
                <td class="px-5 py-2.5">
                    Admin
                </td>
                <td class="px-5 py-2.5">
                    johndow@gmail.com
                </td>
            </tr>
            <tr>
                <th scope="row"
                    class="px-5 py-2.5 font-medium text-title whitespace-nowrap">
                    2.
                </th>
                <td class="px-5 py-2.5">
                    John Doe
                </td>
                <td class="px-5 py-2.5">
                    Admin
                </td>
                <td class="px-5 py-2.5">
                    johndow@gmail.com
                </td>
            </tr>
            <tr>
                <th scope="row"
                    class="px-5 py-2.5 font-medium text-title whitespace-nowrap">
                    3.
                </th>
                <td class="px-5 py-2.5">
                    John Doe
                </td>
                <td class="px-5 py-2.5">
                    Admin
                </td>
                <td class="px-5 py-2.5">
                    johndow@gmail.com
                </td>
            </tr>
            <tr>
                <th scope="row"
                    class="px-5 py-2.5 font-medium text-title whitespace-nowrap">
                    4.
                </th>
                <td class="px-5 py-2.5">
                    John Doe
                </td>
                <td class="px-5 py-2.5">
                    Admin
                </td>
                <td class="px-5 py-2.5">
                    johndow@gmail.com
                </td>
            </tr>
        </tbody>
    </table>
</div>`},
    'table/HeaderGray':{
        lang:"html",
        name:"index.html", 
        code:`
<div class="relative overflow-x-auto rd-md  b bdr-high">
    <table class="w-full text-body text-left">
        <thead
            class="capitalize font-medium text-sm text-title py-2 b-b bdr_b-high rd-t-md bg-high">
            <tr>
                <th scope="col" class="px-5 py-2.5">
                    ID
                </th>
                <th scope="col" class="px-5 py-2.5">
                    Name
                </th>
                <th scope="col" class="px-5 py-2.5">
                    Title
                </th>
                <th scope="col" class="px-5 py-2.5">
                    Email
                </th>
            </tr>
        </thead>
        <tbody class="text-sm divide-y divide-gray-200 dark:divide-gray-800">
            <tr>
                <th scope="row"
                    class="px-5 py-2.5 font-medium text-title whitespace-nowrap">
                    1.
                </th>
                <td class="px-5 py-2.5">
                    John Doe
                </td>
                <td class="px-5 py-2.5">
                    Admin
                </td>
                <td class="px-5 py-2.5">
                    johndow@gmail.com
                </td>
            </tr>
            <tr>
                <th scope="row"
                    class="px-5 py-2.5 font-medium text-title whitespace-nowrap">
                    2.
                </th>
                <td class="px-5 py-2.5">
                    John Doe
                </td>
                <td class="px-5 py-2.5">
                    Admin
                </td>
                <td class="px-5 py-2.5">
                    johndow@gmail.com
                </td>
            </tr>
            <tr>
                <th scope="row"
                    class="px-5 py-2.5 font-medium text-title whitespace-nowrap">
                    3.
                </th>
                <td class="px-5 py-2.5">
                    John Doe
                </td>
                <td class="px-5 py-2.5">
                    Admin
                </td>
                <td class="px-5 py-2.5">
                    johndow@gmail.com
                </td>
            </tr>
            <tr>
                <th scope="row"
                    class="px-5 py-2.5 font-medium text-title whitespace-nowrap">
                    4.
                </th>
                <td class="px-5 py-2.5">
                    John Doe
                </td>
                <td class="px-5 py-2.5">
                    Admin
                </td>
                <td class="px-5 py-2.5">
                    johndow@gmail.com
                </td>
            </tr>
        </tbody>
    </table>
</div>`},
}