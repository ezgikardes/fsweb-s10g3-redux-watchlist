export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const addFavorite = (movie) => {
    return {type: 'ADD_FAVORITE', payload: movie}
}

export const removeFavorite = (id) => {
    return {type: 'REMOVE_FAVORITE', payload: id} 
}

//notlar: add işlemi sırasında tüm film bilgilerini eklediğimiz için action'un payload'ına "movie" diyoruz. Ama remove işlemi sırasında tüm bilgilere erişmeye gerek yok. o filmi benzersiz tanımlayan id'yi action objesinin payload'ına value olarak giriyoruz. Reducer'daki add işlemine bir kontrol yazdığımızda id kullanmamaızın nedeni de bu. Hangi filmin halihazırda listede olduğunu belirlemek için id'ye bakıyoruz.