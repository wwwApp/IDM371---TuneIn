import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Modal,  Dimensions } from 'react-native';
import { ColorWheel } from 'react-native-color-wheel';
import { Tag } from './Tag';

class MoodPicker extends React.Component {



  render(){
    return(
      

      <View style={styles.moodPicker}> 
        <View style={{width: "100%", height: 100, flex: .3, alignItems: "flex-end", }}>
        
              <TouchableHighlight
                onPress={() => {this.props.closeMp()}}
                style={{padding: 10,}}>
                
                        <Image
                          source={require('../assets/close-button.png')}
                          style={{
                          marginRight: 20,
                          marginTop: 65,
                          }} />
                            
                          
                  </TouchableHighlight>

        </View>

          <View style={{flex: 2, height: 300, }}>
            
          <ColorWheel
              initialColor="#ffffff"
              onColorChange={color => console.log({color})}
              onColorChangeComplete={color => onChange(color)}
              style={{
              width: Dimensions.get('window').width,
              maxHeight: 400
                        }}
              thumbStyle={{ height: 30, width: 30, borderRadius: 30}}
                  />

            </View>   

            <Tag tagData={["Party", "Beach", "Warm Weather"]} />
      </View>
  
    )
  }


}

const styles = StyleSheet.create({
    
    moodPicker: {
      backgroundColor: "#312F2F",
      height: 1000,
      opacity: .95,
      flex: 1,
      flexDirection: "column",
      alignItems: "flex-start"
      
  
    }
    
  });

  export { MoodPicker };