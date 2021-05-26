// const getProperty = async () => {
//     const response = await fetch('http://127.0.0.1:5000/getProperty');
//     const jsonResponse = await response.json();
//     console.log(jsonResponse);
//     return jsonResponse.data;
// };

// const getPropertyById = async (id) =>{
//     const response = await fetch('http://127.0.0.1:5000/getPropertyById/' + id);
//     const jsonResponse = await response.json();
//     console.log(jsonResponse);
// };


// const createProperty = async () => {
//     const response = await fetch('http://127.0.0.1:5000/Addproperty');
//     const jsonResponse = await response.json();
//     console.log(jsonResponse);
//     return jsonResponse.data;
// };

// const editProperty = async (id) => {
//     const response = await fetch('http://127.0.0.1:5000/editProperty' + id);
//     const jsonResponse = await response.json();
//     console.log(jsonResponse);
//     return jsonResponse.data;
// };

// const deletePropertyById = async (id) =>{
//     const response = await fetch('http://127.0.0.1:5000/deleteProperty/' + id);
//     const jsonResponse = await response.json();
//     console.log(jsonResponse);
// };

// const PropertyService = {
//     getProperty,
//     getPropertyById,
//     createProperty,
//     editProperty,
//     deletePropertyById
// }

// export default PropertyService;