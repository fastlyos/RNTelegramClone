import React, { useCallback, useEffect, useState, memo, useMemo } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import useImageDimensions from "@app/hooks/useImageDimensions";
import { iOSColors, materialColors } from "react-native-typography";
import { SCREEN_WIDTH, TOP_CONFIG } from "../schema";
import { SmileIcon, CameraIcon, BubbleIcon, PencilIcon, PinIcon, VideoCamIcon } from "./Icons";

const { STAR_OFFSET_LEFT, STAR_OFFSET_TOP, STAR_OFFSET_TOP_LIMIT, STAR_OFFSET_LEFT_LIMIT } = TOP_CONFIG;

function PlaneComponent() {
  const sphereDimension = useImageDimensions(require("@app/assets/images/intro/telegram_sphere.png"));
  const planeDimension = useImageDimensions(require("@app/assets/images/intro/telegram_plane1.png"));
  return (
    <>
      <View
        style={{
          position: "absolute",
          flex: 1,
          width: SCREEN_WIDTH,
          alignItems: "center",
        }}>
        <Image source={require("@app/assets/images/intro/telegram_sphere.png")} style={sphereDimension} />
      </View>
      <View style={{ paddingRight: 18, flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image source={require("@app/assets/images/intro/telegram_plane1.png")} style={planeDimension} />
      </View>
    </>
  );
}

function FastArrowComponent() {
  const fastBodyDimension = useImageDimensions(require("@app/assets/images/intro/fast_body.png"));
  const fastSpiralDimension = useImageDimensions(require("@app/assets/images/intro/fast_spiral.png"));
  const fastArrowDimension = useImageDimensions(require("@app/assets/images/intro/fast_arrow.png"));
  const fastArrowShadowDimension = useImageDimensions(require("@app/assets/images/intro/fast_arrow_shadow.png"));
  const arrowOffset = 22;
  const restArrowOffset = fastArrowDimension ? fastArrowDimension.width - 2 * arrowOffset : arrowOffset * 2;

  return (
    <>
      <View
        style={{
          position: "absolute",
          flex: 1,
          width: SCREEN_WIDTH,
          alignItems: "center",
        }}>
        <Image source={require("@app/assets/images/intro/fast_body.png")} style={fastBodyDimension} />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          transform: [
            {
              rotate: "35deg", // animated value
            },
          ],
        }}>
        {/* spiral */}
        <View style={{ position: "absolute" }}>
          <Image source={require("@app/assets/images/intro/fast_spiral.png")} style={[fastSpiralDimension, { borderRadius: 118 }]} />
        </View>
        {/* arrow */}
        <View
          style={{
            width: fastArrowDimension ? fastArrowDimension.width + restArrowOffset : restArrowOffset,
          }}>
          <View
            style={{
              flexDirection: "row",
            }}>
            <View style={{ height: 1, width: restArrowOffset }} />
            <View style={{ position: "relative" }}>
              <View style={{ position: "absolute" }}>
                <Image source={require("@app/assets/images/intro/fast_arrow_shadow.png")} style={fastArrowDimension} />
              </View>
              <Image source={require("@app/assets/images/intro/fast_arrow.png")} style={fastArrowDimension} />
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

function GiftComponent() {
  const knotDownDimension = useImageDimensions(require("@app/assets/images/intro/knot_down.png"));
  const knotUpDimension = useImageDimensions(require("@app/assets/images/intro/knot_up1.png"));
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}>
      <View
        style={{
          height: 148,
          width: 148,
          backgroundColor: "red",
          borderRadius: 30,
          overflow: "hidden",
        }}>
        {/* icon smile */}
        <View
          style={{
            position: "absolute",
            right: 18,
            top: -8,
            transform: [{ rotate: "-20deg" }],
          }}>
          <SmileIcon />
        </View>
        {/* icon pencil */}
        <View
          style={{
            position: "absolute",
            left: 15,
            top: 4,
            transform: [{ rotate: "0deg" }],
          }}>
          <PencilIcon />
        </View>
        {/* icon location */}
        <View
          style={{
            position: "absolute",
            left: -5,
            top: 148 * 0.5,
            transform: [
              {
                rotate: "-15deg",
              },
            ],
          }}>
          <PinIcon />
        </View>
        {/* icon camera */}
        <View
          style={{
            position: "absolute",
            right: 0,
            bottom: 15,
            transform: [{ rotate: "10deg" }],
          }}>
          <CameraIcon />
        </View>
        {/* icon bubble */}
        <View
          style={{
            position: "absolute",
            left: 23,
            bottom: -2,
            transform: [{ rotate: "-15deg" }],
          }}>
          <BubbleIcon tintColor="red" />
        </View>
        {/* knot */}
        <View
          style={{
            position: "absolute",
            left: 148 * 0.5,
            height: "100%",
            justifyContent: "center",
          }}>
          <Image source={require("@app/assets/images/intro/knot_up1.png")} style={[knotUpDimension, { tintColor: materialColors.whitePrimary }]} />
          <Image source={require("@app/assets/images/intro/knot_down.png")} style={[knotDownDimension, { tintColor: materialColors.whitePrimary }]} />
        </View>
        <View
          style={{
            position: "absolute",
            right: 148 * 0.5,
            height: "100%",
            justifyContent: "center",
          }}>
          <View style={{ transform: [{ scaleX: -1 }] }}>
            <Image source={require("@app/assets/images/intro/knot_up1.png")} style={[knotUpDimension, { tintColor: materialColors.whitePrimary }]} />
          </View>
          <View style={{ transform: [{ scaleX: -1 }] }}>
            <Image source={require("@app/assets/images/intro/knot_down.png")} style={[knotDownDimension, { tintColor: materialColors.whitePrimary }]} />
          </View>
        </View>
        {/* line */}
        <View style={{ position: "absolute", height: "100%", width: "100%", justifyContent: "center", alignItems: "center" }}>
          <View style={{ position: "absolute", height: 12, width: "100%", backgroundColor: "white" }} />
          <View style={{ position: "absolute", width: 12, height: "100%", backgroundColor: "white" }} />
        </View>
      </View>
    </View>
  );
}

function PowerfulComponent() {
  const powerfulMaskDimension = useImageDimensions(require("@app/assets/images/intro/powerful_mask.png"));
  const powerfulInfinityDimension = useImageDimensions(require("@app/assets/images/intro/powerful_infinity.png"));
  const powerfulStarDimension = useImageDimensions(require("@app/assets/images/intro/powerful_star.png"));

  const starPositions = new Array(30).fill(1).map((i, index) => {
    const x = STAR_OFFSET_LEFT + Math.random() * (STAR_OFFSET_LEFT_LIMIT - STAR_OFFSET_LEFT);
    const y = STAR_OFFSET_TOP + Math.random() * (STAR_OFFSET_TOP_LIMIT - STAR_OFFSET_TOP);
    return { id: index, x, y };
  });

  return (
    <View
      style={{
        position: "absolute",
        flex: 1,
        width: SCREEN_WIDTH,
        alignItems: "center",
      }}>
      <Image
        source={require("@app/assets/images/intro/powerful_mask.png")}
        style={[powerfulMaskDimension, { tintColor: "white", backgroundColor: "rgb(57,89,128)" }]}
      />
      {/* infinity */}
      <View style={{ position: "absolute", height: "100%", justifyContent: "center", paddingBottom: 15 }}>
        <Image source={require("@app/assets/images/intro/powerful_infinity.png")} style={[powerfulInfinityDimension]} />
      </View>
      {/* star */}
      <View style={{ position: "absolute" }}>
        {starPositions.map((i) => (
          <Image
            key={String(i.id)}
            source={require("@app/assets/images/intro/powerful_star.png")}
            style={[{ top: i.y, left: i.x, width: (i.id % 3) + 1, height: (i.id % 3) + 1 }]}
          />
        ))}
      </View>
    </View>
  );
}

function SecureComponent() {
  const privateDoorDimension = useImageDimensions(require("@app/assets/images/intro/private_door.png"));
  const privateScrewDimension = useImageDimensions(require("@app/assets/images/intro/private_screw.png"));
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* layout */}
      <View
        style={{
          position: "absolute",
          height: 148,
          width: 148,
          backgroundColor: "rgb(201,207,211)",
          borderRadius: 30,
          paddingHorizontal: 12,
          paddingVertical: 12,
          justifyContent: "space-between",
        }}>
        <View style={{ flexWrap: "wrap", flexDirection: "row", justifyContent: "space-between" }}>
          <Image source={require("@app/assets/images/intro/private_screw.png")} style={privateScrewDimension} />
          <Image source={require("@app/assets/images/intro/private_screw.png")} style={privateScrewDimension} />
        </View>
        <View style={{ flexWrap: "wrap", flexDirection: "row", justifyContent: "space-between" }}>
          <Image source={require("@app/assets/images/intro/private_screw.png")} style={privateScrewDimension} />
          <Image source={require("@app/assets/images/intro/private_screw.png")} style={privateScrewDimension} />
        </View>
      </View>
      <Image source={require("@app/assets/images/intro/private_door.png")} style={privateDoorDimension} />
      <View
        style={[
          privateDoorDimension,
          {
            position: "absolute",
            borderRadius: 999,
            borderWidth: 10,
            borderColor: "white",
          },
        ]}
      />
    </View>
  );
}

function CloudBasedComponent() {
  const BOX_SIZE = [148, 220];
  const MASK_SIZE = [66, 47, 62, 120];
  //
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* box */}
      <View style={{ height: BOX_SIZE[0], width: BOX_SIZE[1] }}>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            height: MASK_SIZE[0],
            width: MASK_SIZE[0],
            borderRadius: 999,
            backgroundColor: "rgb(89, 177, 241)",
            overflow: "hidden",
          }}>
          {/* pin */}
          <View
            style={{
              position: "absolute",
              left: 0,
              top: -8,
              transform: [{ rotate: "-5deg" }],
            }}>
            <PinIcon />
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            top: 52,
            left: 33,
            height: MASK_SIZE[1],
            width: MASK_SIZE[1],
            borderRadius: 999,
            backgroundColor: "rgb(89, 177, 241)",
          }}
        />
        <View
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            height: MASK_SIZE[2],
            width: MASK_SIZE[2],
            borderRadius: 999,
            backgroundColor: "rgb(89, 177, 241)",
          }}
        />

        <View
          style={{
            position: "absolute",
            bottom: 10,
            right: 35,
            height: MASK_SIZE[3],
            width: MASK_SIZE[3],
            borderRadius: 999,
            backgroundColor: "rgb(89, 177, 241)",
            overflow: "hidden",
            // backgroundColor: 'red'
          }}>
          {/* bubble */}
          <View
            style={{
              position: "absolute",
              right: 14,
              top: 8,
              transform: [{ rotate: "-10deg" }],
            }}>
            <BubbleIcon tintColor="rgb(89, 177, 241)" />
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 33,
            height: MASK_SIZE[0] * 0.8,
            width: BOX_SIZE[1] - 33 - 31,
            backgroundColor: "rgb(89, 177, 241)",
            overflow: "hidden",
          }}>
          {/* video cam */}
          <View
            style={{
              position: "absolute",
              left: 0,
              bottom: 2,
              transform: [{ rotate: "-20deg" }],
            }}>
            <VideoCamIcon />
          </View>
        </View>
        {/* icon smile */}
        <View
          style={{
            position: "absolute",
            right: 54,
            bottom: 14,
            transform: [{ rotate: "-15deg" }],
          }}>
          <SmileIcon />
        </View>
        {/* pencil */}
        <View
          style={{
            position: "absolute",
            right: 8,
            bottom: 14,
            transform: [{ rotate: "5deg" }],
          }}>
          <PencilIcon />
        </View>
        {/* camera */}
        <View
          style={{
            position: "absolute",
            left: 70,
            top: 64,
            transform: [{ rotate: "15deg" }],
          }}>
          <CameraIcon />
        </View>
      </View>
    </View>
  );
}

function IntroHeaderImages({ viewableItem }) {
  return (
    <View style={styles.container}>
      {viewableItem === 0 && <PlaneComponent />}
      {viewableItem === 1 && <FastArrowComponent />}
      {viewableItem === 2 && <GiftComponent />}
      {viewableItem === 3 && <PowerfulComponent />}
      {viewableItem === 4 && <SecureComponent />}
      {viewableItem === 5 && <CloudBasedComponent />}
    </View>
  );
}
export default IntroHeaderImages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 0.25,
    // backgroundColor: 'red',
    justifyContent: "center",
  },
});
