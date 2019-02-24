import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TrackList } from "./../components/TrackList";
import { ButtonIcon } from "../components/ButtonIcon";
import { Tag } from "./../components/Tag";
import LinearGradient from "react-native-linear-gradient";
import { Colors } from "./../styles/Colors";
import { getPlaylist } from "../redux/reducers/playlist.reducer";
import { connect } from "react-redux";

class Playlist extends Component {
  componentDidMount() {
    this.props.getPlaylist("5c6ac32fe21c4e00360b5592");
  }

  constructor(props) {
    super(props);
    this.state = { isPlaying: false, toggleIcon: "ios-play" };
  }

  togglePlay() {
    // Toggle state and icon
    const isPlaying = !this.state.isPlaying;
    const toggleIcon = isPlaying ? "ios-pause" : "ios-play";
    this.setState({ isPlaying, toggleIcon });
  }

  render() {
    return (
      // Container View
      // Change the color values based on mood calculated from server for bg color
      <LinearGradient
        style={styles.container}
        colors={[Colors.tintTopGradient, Colors.tintBottomGradient]}
      >
        {!this.props.isLoading && [
          <View style={[styles.playButtonContainer, styles.playButtonIcon]}>
            <ButtonIcon
              style={{color: 'black'}}
              type="pl-play"
              toggleIcon={this.state.toggleIcon}
              size={50}
              onPress={this.togglePlay.bind(this)}
            />
          </View>,
          <View style={styles.topIconGroup}>
            <ButtonIcon type="return" />
            <View style={styles.rightIcon}>
              <ButtonIcon
                type="heart"
                onPress={() => this.props.getPlaylist("fdsafdsgjhakfgkjads")}
              />

              <ButtonIcon type="more" />
            </View>
          </View>,
          <View>
            <Text style={[styles.playlistItem, styles.title, styles.txtBold]}>
              {this.props.playlist.title}
            </Text>
            <Text
              style={[styles.playlistItem, styles.location, styles.txtLight]}
            >
              {this.props.playlist.location_name || "location"}
            </Text>
            <View style={[styles.playlistItem, styles.tag]}>
              <Tag tagData={this.props.playlist.tags} />
            </View>
            <Text style={styles.playlistItem}>
              {this.props.playlist.description}
            </Text>
            <Text style={[styles.playlistItem, styles.user, styles.txtLight]}>
              @{this.props.playlist.user.display_name}
            </Text>
          </View>,
          <TrackList trackData={this.props.playlist.tracks} />
        ]}
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 40,
    paddingTop: 50
  },
  topIconGroup: {
    width: "100%",
    height: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  rightIcon: {
    flexDirection: "row"
  },
  playlistItem: {
    fontFamily: "Avenir",
    color: Colors.defaultFont
  },
  title: {
    fontSize: 30
  },
  location: {
    fontSize: 20
  },
  tag: {
    marginTop: 20,
    marginBottom: 20
  },
  user: {
    marginTop: 5,
    marginBottom: 30
  },
  txtBold: {
    fontWeight: "bold"
  },
  txtLight: {
    fontWeight: "100"
  },
  playButtonContainer: {
    position: "absolute",
    top: 130,
    right: 35,
    zIndex: 9999
  },
  playButtonIcon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 90,
    height: 90,
    backgroundColor: "#E7E7E7",
    borderRadius: 90
  }
});

const mapStateToProps = state => ({
  playlist: state.playlist.playlist,
  isLoading: state.playlist.loading
});

const mapDispatchToProps = {
  getPlaylist
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist);
