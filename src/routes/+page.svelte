<script lang="ts">
    import "../app.css";
    import jar from "$lib/assets/jar.png";
    import banner from "$lib/assets/banner.png";
    export let data;
    let { activityData } = data;


    let activities:string[] = activityData;
    let randomActivity: string = activities[0];

    let addActivity = (event: any) => {
        if(event.key.toLowerCase() == "enter"){
            activities = [...activities, event.target.value];
            event.target.value = "";
        }
    }

    let removeActivty = (event: any) => {
        activities = activities.filter((act, index) => index !== parseInt(event.target.id));
    }

    let getActivity = () => {
        randomActivity = activities[Math.floor(Math.random() * activities.length)];
    }
    
    // ----- CSS STYLE VARIABLES
    const mainContainer: string = "w-screen h-screen flex flex-wrap justify-center text-[#fff]";
    
    const jarContainer: string = "h-full flex flex-col justify-center items-center grow bg-[#f4b5eb]";
    const rndBtnStle: string = "absolute mt-25 cursor-pointer transition-all bg-[#8260a2] px-6 py-2 " +
        "rounded-lg border-[#3c383e] border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] " + 
        "hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"

    const activityContainer: string = "w-1/3 h-full p-12 overflow-scroll flex flex-col grow justify-start self-start items-center bg-[#eeeeee]";
    const activityInput: string = "w-full rounded-sm outline-none shadow-xl/30 mb-3 p-2 self-start bg-[#6b6b6b]";
    const activityCard: string = "w-full h-15 p-2 m-2 flex bg-[#8260a2] hover:bg-[#363232] justify-between items-center shadow-lg";

</script>



<div class={mainContainer} >
    <div class={jarContainer}>
        <img class="w-2/3" src={banner} alt="date nite" />
        <div class="w-2/3 flex flex-col justify-center items-center">
            <img src={jar} alt="Jar of activties"/>
            <span class="absolute font-sans text-2xl" >{randomActivity}</span>
            <button class={rndBtnStle} on:click={getActivity}>Generate Activity</button>
        </div>
    </div>

    <div class={activityContainer}>
        <input on:keydown={addActivity} class={activityInput} type="text" placeholder="add activty. . ."/>
            {#each activities as activity, index}
                <div class={activityCard}>
                    <span>{activity}</span>
                    <button type="button" on:click={removeActivty} class="w-8 h-2/3 hover:brightness-150">
                        <img id={index.toString()} class="w-full h-full" src="https://img.icons8.com/stickers/100/delete-forever.png" alt="delete-forever"/>
                    </button>
                </div>
            {/each}
    </div>
</div>