// # URLs
//     - Uniform Resource Locator
//the example of the structure of a url:
//www.amazon.com/clothing
//     # Base Url
    //www.amazon.com
//     # Endpoint
    //  /clothing/jackets/-->njenvoievmeo <----the ID
//     # Parameter - requesting specific resources from a database(id)<-- what youre send to get a specific esource is an id
    // /njenvoievmeo
    //- /clothing/jackets/:_id <--- what it looks like as an argument the user clicks on jacket
    // - /clothing/jackets/njenvoievmeo<--- the endpoint returns a specific number or ID after "jackets" is clicked
//     # Query(Query strings)
    //www.amazon.com/clothing/jackets?color=black <--looks for a very specific resource using the question mark
    //and then if you want to add another key value, use the "&" type in the resource 
    //www.amazon.com/clothing/jackets?color=black&type=leather
    //what it looks in the backend looking into the resources:

    const query = {
        color: black,
        type: leather
    }