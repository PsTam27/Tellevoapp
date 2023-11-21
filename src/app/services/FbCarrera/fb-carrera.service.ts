import { Injectable } from '@angular/core';
import { collection, Firestore, addDoc, collectionData,docData, doc, updateDoc} from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { deleteDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Carrera } from "../../interfaces/carrer";

@Injectable({
  providedIn: 'root'
})
export class FbCarreraService {
  

  constructor(
    private firestore2: AngularFirestore) { }

  
  //crear coleccion
  crearDoc(data:any,path:string,id:string){
    const collection= this.firestore2.collection(path);
    return collection.doc(id).set(data);
  }
  //obtener coleccion
  obtenerDoc(path:string ,id:string){
    const collection= this.firestore2.collection(path);
    return collection.doc(id).valueChanges();
  }
  //eliminar una coleccion
  eliminarDoc(path:string ,id:string){
    const collection= this.firestore2.collection(path);
    return collection.doc(id).delete();
  }
  //actualizar
  actualizarDoc(data:any,path:string ,id:string){
    const collection= this.firestore2.collection(path);
    return collection.doc(id).update(data);

  }
  getId(){
    return this.firestore2.createId();
  }
  getCollection<tipo>(path:string){
    const collection= this.firestore2.collection<tipo>(path);
    return collection.valueChanges(); 

  }

}


