<View style={{display: this.state.favorites}}>
<View style={styles.container}>
<Text style={styles.text7}>
To get started tell us about some of your favorite places to visit
</Text>
<ScrollView>
    <View style={styles.container}>
{this.state.imageList.map((pictures) => (
    <View style={styles.itemContainer}>
  <Text style={styles.text5}>
      {pictures.publicfigure}
    </Text>
<Image source={{uri: pictures.image }}
style={{height: 100, width: deviceWidth, }}/>

<View style={styles.boxBar}>
<TouchableHighlight onPress={this.increaseCounter}>
<Image source={{uri: this.state.star}} style={{height: 20, width: 20, margin: 7,}}/>
</TouchableHighlight>

           <View style={styles.bar}>
                        <Text style={styles.text}>
           Add to Favorites
  </Text>  
</View>

</View>
    </View>
))}
  </View>
</ScrollView>
<View style={styles.center1}>
<TouchableHighlight style = {styles.button1} onPress={this.handleAllLocationsPagePress}>
<Text style={styles.buttonText}>
Continue
</Text>
</TouchableHighlight> 
</View>  
</View>
</View>
