const API_URL = 'http://localhost:4000/movements' ;

export const getMovements = async () =>{
    try{
        const response = await axios.get(API_URL) ;
        return response.data;
    } catch(error){
        console.error("Error in fetching movements:",error );
        throw error ;
    }
};

export const createMovement = async (movementData) =>{
    try {
        const response = await axios.post(API_URL,movementData,{
            headers : {'content-Type' : 'multipart/form-data'},
        });
        return response.data ;
    }
    catch(error)
    {
        console.error('Error creating movement:', error);
        throw error;
    }
    
}

export const updateMovement = async (id, movementData) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, movementData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response.data;
    } catch (error) {
      console.error('Error updating movement:', error);
      throw error;
    }
  };

export const deleteMovement = async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting movement:', error);
      throw error;
    }
};