import React, { useCallback, useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import HeaderComponent from "../components/common/HeaderComponent";
import IconMenuGroup from "../atoms/IconMenuGroup";

function HomeScreen() {
  const [news, setNews] = useState<"news" | "trend">("news");

  const changeNews = useCallback((news: "news" | "trend") => {
    setNews(news);
  }, []);

  return (
    <SafeAreaView>
      <HeaderComponent />
      {/* 자산 정보, 메뉴 아이콘 */}
      <View style={styles.marginWrap}>
        <View style={styles.firstContent}>
          <View style={styles.textBlock}>
            <View style={{ ...styles.textGrp, marginBottom: 22 }}>
              <Text
                style={{
                  fontSize: 16,
                  color: "#333",
                }}
              >
                김민우님의 총 자산
              </Text>
              <Text
                style={{
                  flex: 1,
                  fontSize: 20,
                  fontWeight: "700",
                  color: "#292275",
                  textAlign: "right",
                }}
              >
                11,964,983{" "}
                <Text
                  style={{
                    fontSize: 12,
                    color: "#A7A7A7",
                  }}
                >
                  원
                </Text>
              </Text>
            </View>
            <View style={styles.textGrp}>
              <Text
                style={{
                  fontSize: 12,
                  color: "#717171",
                }}
              >
                투자금액
              </Text>
              <Text
                style={{
                  flex: 1,
                  textAlign: "right",
                  fontSize: 16,
                  fontWeight: "600",
                }}
              >
                13,187,854{" "}
                <Text
                  style={{
                    fontSize: 12,
                    color: "#A7A7A7",
                  }}
                >
                  원
                </Text>
              </Text>
            </View>
            <View style={styles.textGrp}>
              <Text
                style={{
                  fontSize: 12,
                  color: "#717171",
                }}
              >
                투자수익
              </Text>
              <Text
                style={{
                  flex: 1,
                  textAlign: "right",
                  fontSize: 16,
                  fontWeight: "600",
                  color: "#6d64DD",
                }}
              >
                -1,681,724{" "}
                <Text
                  style={{
                    fontSize: 10,
                    color: "#A7A7A7",
                  }}
                >
                  원
                </Text>
              </Text>
            </View>
            <View style={styles.textGrp}>
              <Text
                style={{
                  fontSize: 12,
                  color: "#717171",
                }}
              >
                수익률
              </Text>
              <Text
                style={{
                  flex: 1,
                  textAlign: "right",
                  fontSize: 16,
                  fontWeight: "600",
                }}
              >
                -12.75{" "}
                <Text
                  style={{
                    fontSize: 12,
                    color: "#A7A7A7",
                  }}
                >
                  %
                </Text>
              </Text>
            </View>
            <View style={styles.textGrp}>
              <Text
                style={{
                  fontSize: 12,
                  color: "#717171",
                }}
              >
                출금가능금액
              </Text>
              <Text
                style={{
                  flex: 1,
                  textAlign: "right",
                  fontSize: 16,
                  fontWeight: "600",
                }}
              >
                351,661{" "}
                <Text
                  style={{
                    fontSize: 12,
                    color: "#A7A7A7",
                  }}
                >
                  원
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.firstContentMenuGrp}>
            <View style={styles.firstContentMenu}>
              <Text
                style={{
                  color: "#292275",
                  fontWeight: "600",
                }}
              >
                전계좌현황
              </Text>
            </View>
            <View style={styles.Line} />
            <View style={styles.firstContentMenu}>
              <Text
                style={{
                  color: "#292275",
                  fontWeight: "600",
                }}
              >
                즉시이체
              </Text>
            </View>
          </View>
        </View>
      </View>
      {/* 아이콘 블록 */}
      <View style={styles.marginWrap}>
        <IconMenuGroup />
      </View>
      <View
        style={{ ...styles.wrap, height: 80, backgroundColor: "#CCC" }}
      ></View>
      <View style={styles.marginWrap}>
        <View style={styles.newsContainer}>
          <View style={styles.newsDistribute}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => changeNews("news")}
              style={{
                marginRight: 24,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: news === "news" ? "700" : "400",
                }}
              >
                최근종목 국내뉴스
              </Text>
            </TouchableOpacity>
            <View style={{ ...styles.Line, width: 1.5 }}></View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => changeNews("trend")}
              style={{
                marginLeft: 24,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: news === "trend" ? "700" : "400",
                }}
              >
                핫트렌드
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  newsDistribute: {
    flexDirection: "row",
    alignItems: "center",
  },
  newsContainer: {
    padding: 16,
    marginVertical: 16,
    backgroundColor: "#FFF",
    borderRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  container: {
    backgroundColor: "#F8F8F8",
  },
  marginWrap: {
    marginLeft: 8,
    marginRight: 8,
  },
  wrap: {},
  textBlock: {
    marginHorizontal: 14,
    marginVertical: 20,
  },
  textGrp: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    marginBottom: 6,
  },
  firstContent: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  firstContentMenuGrp: {
    flexDirection: "row",
    width: "100%",
    height: 60,
    backgroundColor: "#FAFAFA",
    borderBottomStartRadius: 8,
    borderBottomEndRadius: 8,
    overflow: "hidden",
    borderTopWidth: 0.5,
    borderColor: "#DDD",
  },
  Line: {
    height: "100%",
    width: 0.5,
    backgroundColor: "#DDD",
  },
  firstContentMenu: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
