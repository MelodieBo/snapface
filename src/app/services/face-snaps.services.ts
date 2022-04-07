import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.models";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {
    faceSnaps = [
        {
            id: 1,
            title: 'Archibald', 
            buttonText:'Oh Snap!',
            description: 'Mon meilleur ami depuis tout petit', 
            categorie: 'Ami', 
            subtitle: 'Un ourson trop mignon', 
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg', 
            createdDate: new Date(), 
            snaps: 0,
            location: 'Paris'
        },
        {
            id: 2,
            title: 'Peace & Love', 
            buttonText:'Oh Snap!',
            description: 'Un message de paix pour l\'Ukraine', 
            categorie: 'Monde', 
            subtitle: 'Une couronne de feuilles', 
            imageUrl: 'https://cdn.pixabay.com/photo/2022/03/02/13/42/peace-7043225_960_720.jpg', 
            createdDate: new Date(), 
            snaps: 0
        },
        {
            id: 3,
            title: 'Norvège', 
            buttonText:'Oh Snap!',
            description: 'Un paysage de Norvège', 
            categorie: 'Voyage', 
            subtitle: 'Des montagnes et un lac', 
            imageUrl: 'https://cdn.pixabay.com/photo/2020/03/26/10/58/norway-4970080_960_720.jpg', 
            createdDate: new Date(), 
            snaps: 0,
            location: 'La Montagne'
        },
        {
            id: 4,
            title: 'Archibald', 
            buttonText:'Oh Snap!',
            description: 'Mon meilleur ami depuis tout petit', 
            categorie: 'Ami', 
            subtitle: 'Un ourson trop mignon', 
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg', 
            createdDate: new Date(), 
            snaps: 0,
            location: 'Paris'
        },
        {
            id: 5,
            title: 'Peace & Love', 
            buttonText:'Oh Snap!',
            description: 'Un message de paix pour l\'Ukraine', 
            categorie: 'Monde', 
            subtitle: 'Une couronne de feuilles', 
            imageUrl: 'https://cdn.pixabay.com/photo/2022/03/02/13/42/peace-7043225_960_720.jpg', 
            createdDate: new Date(), 
            snaps: 0
        },
        {
            id: 6,
            title: 'Archibald', 
            buttonText:'Oh Snap!',
            description: 'Mon meilleur ami depuis tout petit', 
            categorie: 'Ami', 
            subtitle: 'Un ourson trop mignon', 
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg', 
            createdDate: new Date(), 
            snaps: 0,
            location: 'Paris'
        },
        {
            id: 7,
            title: 'Norvège', 
            buttonText:'Oh Snap!',
            description: 'Un paysage de Norvège', 
            categorie: 'Voyage', 
            subtitle: 'Des montagnes et un lac', 
            imageUrl: 'https://cdn.pixabay.com/photo/2020/03/26/10/58/norway-4970080_960_720.jpg', 
            createdDate: new Date(), 
            snaps: 0,
            location: 'La Montagne'
        },
        {
            id: 8,
            title: 'Peace & Love', 
            buttonText:'Oh Snap!',
            description: 'Un message de paix pour l\'Ukraine', 
            categorie: 'Monde', 
            subtitle: 'Une couronne de feuilles', 
            imageUrl: 'https://cdn.pixabay.com/photo/2022/03/02/13/42/peace-7043225_960_720.jpg', 
            createdDate: new Date(), 
            snaps: 0
        },
    ];

    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }

    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this. faceSnaps.find(faceSnap => faceSnap.id === faceSnapId)
        if (!faceSnap ) {
            throw new Error('FaceSnap not found');
        }
        else {
            return faceSnap;
        }
    }
    //Comme dans toute base de code, refactorisez pour éviter de répéter des blocs de code (le principe DRY : Don't Repeat Yourself).

    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
        //literal types : créer rapidement des types personnalisés, souvent utilisés pour limiter les choix pour un argument de méthode, par exemple : fileType: 'image' | 'video'
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }
}

//Centraliser les interactions dans un service sous forme de méthodes crée une structure plus modulaire, qui facilite la maintenance et les évolutions de votre application.