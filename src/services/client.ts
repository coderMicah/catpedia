


export const client = async (url: URL) => {

    const resource = url.href


    const headers = new Headers();
    headers.append("Content-type", "application/json; charset=UTF-8");
    headers.append("x-api-key", process.env.CAT_API_KEY!)


    const options = {
        method: "GET",
        headers: headers
    }

    try {
        const res = await fetch(resource.toString(), options);
        return res.json();

    } catch (error) {
        console.log("something went wrong");
    }


}