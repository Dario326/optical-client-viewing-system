app.factory('opticalSrv', function($http){
    return {
        getUsers() {
            return $http.get(`/api/users`)
        },
        postUsers(obj){
             return $http.post(`/api/users`, obj)
            
        },
        getOneUser() {
             return $http.get(`/api/users/:id`)
        },
        deleteUser(id){
             return $http.delete(`/api/users/${id}`)
        },
        updateUser(){
             return $http.put(`/api/user/:id`)
        },
        
        
        getPictures() {
            return $http.get(`/api/pictures`)
        },
        postPictures(data){
             return $http.post(`/api/pictures`, data)
            
        },
        getOnePicture() {
             return $http.get(`/api/pictures/:id`)
        },
        deletePicture(id){
             return $http.delete(`/api/pictures/${id}`)
        },
        
    }
})