<View style={{display: this.state.prenumbers}}>
 <ScrollView>
<View style={styles.contentContainer}>
<TouchableHighlight style = {styles.listOptions} onPress={this.handleStatsPagePagePress}>
<Text style={styles.optionsList}>
RedLobster
</Text>
</TouchableHighlight>
<TouchableHighlight style = {styles.listOptions} onPress={this.handleStatsPagePagePress}>
<Text style={styles.optionsList}>
Benihanas
</Text>
</TouchableHighlight>
<TouchableHighlight style = {styles.listOptions} onPress={this.handleStatsPagePagePress}>
<Text style={styles.optionsList}>
XS
</Text>
</TouchableHighlight>
<TouchableHighlight style = {styles.listOptions} onPress={this.handleStatsPagePagePress}>
<Text style={styles.optionsList}>
Marquee Night Club
</Text>
</TouchableHighlight><TouchableHighlight style = {styles.listOptions} onPress={this.handleStatsPagePagePress}>
<Text style={styles.optionsList}>
Madison Square Garden
</Text>
</TouchableHighlight><TouchableHighlight style = {styles.listOptions} onPress={this.handleStatsPagePagePress}>
<Text style={styles.optionsList}>
Predential Center
</Text>
</TouchableHighlight><TouchableHighlight style = {styles.listOptions} onPress={this.handleStatsPagePagePress}>
<Text style={styles.optionsList}>
Catch A Rising Star
</Text>
</TouchableHighlight><TouchableHighlight style = {styles.listOptions} onPress={this.handleStatsPagePagePress}>
<Text style={styles.optionsList}>
Laugh Factory
</Text>
</TouchableHighlight><TouchableHighlight style = {styles.listOptions} onPress={this.handleStatsPagePagePress}>
<Text style={styles.optionsList}>
Cucharamama
</Text>
</TouchableHighlight>
<TouchableHighlight style = {styles.listOptions} onPress={this.handleStatsPagePagePress}>
<Text style={styles.optionsList}>
The Frog and the Peach
</Text>
</TouchableHighlight><TouchableHighlight style = {styles.listOptions} onPress={this.handleStatsPagePagePress}>
<Text style={styles.optionsList}>
Hearthside
</Text>
</TouchableHighlight><TouchableHighlight style = {styles.listOptions} onPress={this.handleStatsPagePagePress}>
<Text style={styles.optionsList}>
Mandala
</Text>
</TouchableHighlight><TouchableHighlight style = {styles.listOptions} onPress={this.handleStatsPagePagePress}>
<Text style={styles.optionsList}>
QXT's
</Text>
</TouchableHighlight><TouchableHighlight style = {styles.listOptions} onPress={this.handleStatsPagePagePress}>
<Text style={styles.optionsList}>
Porta 
</Text>
</TouchableHighlight><TouchableHighlight style = {styles.listOptions} onPress={this.handleStatsPagePagePress}>
<Text style={styles.optionsList}>
The Stress Factory
</Text>
</TouchableHighlight>
</View>
</ScrollView>
<TouchableHighlight style = {styles.button1} onPress={this.handleDirectionsPagePress}>
<Text style={styles.text1}>
Skip Stats
</Text>
</TouchableHighlight>
</View>
<View style={{display: this.state.statsPage}}>
<View style={styles.contentContainer}>
<Text style={styles.text4}>
Average Wait Time:
</Text>
<TextInput style={styles.textBar2} onChangeText={(atime)=> 
this.setState({atime})} value={this.state.atime}/>
<Text style={styles.text4}>
Current Wait Time:
</Text>
<TextInput style={styles.textBar2} onChangeText={(ctime)=> 
this.setState({ctime})} value={this.state.ctime}/>
<Text style={styles.text4}>
Average Number of Parties of 3+ people:
</Text>
<TextInput style={styles.textBar2} onChangeText={(aparties)=> 
this.setState({aparties})} value={this.state.aparties}/>
<Text style={styles.text4}>
Current Number of Parties of 3+ people:
</Text>
<TextInput style={styles.textBar2} onChangeText={(cparties)=> 
this.setState({cparties})} value={this.state.cparties}/>
<Text style={styles.text4}>
Capacity:
</Text>
<TextInput style={styles.textBar2} onChangeText={(cap)=> 
this.setState({cap})} value={this.state.cap}/>
<TouchableHighlight style = {styles.button1} onPress={this.handlePrenumbersPagePress}>
<Text style={styles.text1}>
Select New Location
</Text>
</TouchableHighlight>
</View>
</View>
