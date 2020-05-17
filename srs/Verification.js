<View style={{display: this.state.verify}}>
<View style={styles.contentContainer}>
<Image 
source={{uri: 'data:image/png;base64,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'}}
style={{height: 103, width: 155, marginTop: 25, margin: 10,}}/>
<View style={styles.center}>                                                              </View>                                 
<TextInput style={styles.textBar} onChangeText={(email)=> 
this.setState({email})} value={this.state.email}/>
<TextInput style={styles.textBar} onChangeText={(verificationCode)=> 
this.setState({verificationCode})} value={this.state.verificationCode}/>
<TouchableHighlight style = {styles.button1} onPress={this.handleInstructionsPagePress}>
<Text style={styles.text1}>
Learn About This App
</Text>
</TouchableHighlight>
<TouchableHighlight style = {styles.button1} onPress={this.handleSignUpPagePress}>
<Text style={styles.text1}>
See Last Page
</Text>
</TouchableHighlight>
<View style={styles.center}>
<Text style={styles.text3}>
Resend Verification Code
</Text>
</View>
</View>
</View>
