import React, {useEffect, useState} from 'react'
import {View, Text} from 'react-native'
import database from '../firebaseConfig/index'
import styles from './styles'

export default function Read({navigation}){
    
    const [page, setPage] = useState([])

    useEffect(()=>{
        database.collection("crud").onSnapshot((querry)=>{
            const list = []
            querry.forEach(doc => {
                list.push({...doc.data(), id: doc.id})
            });
            setPage[list]
        }) 
    }, [])
    
    return(
        <View style={styles.container}>
            <Text style={styles.texto1}>
                Read
            </Text>
        </View>
    )
}