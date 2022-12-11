import React, {useState} from 'react'
import { View,StyleSheet,Switch,Platform,Text, ScrollView, SectionList} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import ItemSeparator from '../components/ItemSeparator';

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
        {
        casa: "DC Comics",
        data: ["Batman", "Superman", "Robin","Wonder woman", "Flash","Shazam","Batgirl","Green Arrow","Nightwing", "Aquaman","Green Lantern","Hawkgirl","SuperBoy","HawkMan","Cyborg","Doctor manhatan","Atom", "Marciano" ]
        },
        {
        casa: "Marvel Comics",
        data: ["Antman", "Thor", "Spiderman","Antman","Hulk","black widow","Iron Man","captain america","Loki","Black phantern","DeadDevil","Wolverine","DeadPool","Rocket racoon","Knull","Linlie","Carol Danvers","Doctor Strange","Falcon","Avispon" ]
        },
        {
        casa: "Anime",
        data: ["Kenshin", "Goku", "Saitama","kaneki","Eren","Mikasa","Vegeta", "Jason", "Buho", "Arima", "Majin boo", "Kid boo", "Cell", "Ryze","Bulma","Naruto","sasuke","gitana","pain","madara","Seidou","Eto","Touka","Hinami","Hide","Ayato","Kotaro","Yoshimura","Susuya","Genos","Silver fang","Levi","Tanjiro","Nezuko","Rengoku","Zenitsu","Musan","Inosuke","Akaza","Obanai","Tengen" ]
        }
];

const SectionListScreen = () => {
    return (
        <View style={{...styles.globalMargin, flex:1}}>
            
            <SectionList
                sections={ casas }
                keyExtractor={ (item, index) => item + index}
                ListHeaderComponent={() => <HeaderTitle title="Section list"/>}
                ListFooterComponent={() => (
                    <View style={{marginBottom: 70}}>
                        <HeaderTitle title={"Total de casas: " + casas.length}/>
                    </View>
                )}
                renderItem={({item})=><Text>{ item }</Text>}
                stickySectionHeadersEnabled
                renderSectionHeader={({ section }) => (
                    <View style={{ backgroundColor: 'white'}}>
                        <HeaderTitle title={section.casa}/>
                    </View>
                )}
                renderSectionFooter={({ section }) => (
                    <HeaderTitle title={'Total: ' + section.data.length}/>
                )}

                SectionSeparatorComponent={() => <ItemSeparator/>}
                ItemSeparatorComponent={() => <ItemSeparator/>}
                showsVerticalScrollIndicator={false}

            />
        </View>
    )
}

export default SectionListScreen
const styles = StyleSheet.create({
    globalMargin:{
        marginHorizontal:20
    },
    inputStyle:{
        borderWidth:1,
        borderColor: 'rgba(0,0,0,0.3)',
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical:10
    },

});
