import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { scaleModerate, WIDTH_SCREEN } from '../../styles/scaleDimensions'
import { Colors } from '../../styles/Colors'
import { DefaultStyles } from '../../styles/DefaultStyles'

interface ITab {
    data: Array<{ key: string; value: string }>
    onTabChange?: (key: string) => void
    selectedTab?: string
}
const Tab = (props: ITab) => {
    const [selectedTab, setSelectedTab] = useState<string>(props?.selectedTab || props?.data[0].key)
    const listRef = useRef<FlatList>(null)

    useEffect(() => {
        if (props?.selectedTab) setSelectedTab(props?.selectedTab)
    }, [props?.selectedTab])

    return (
        <View style={{ marginBottom: scaleModerate(16) }}>
            <FlatList
                ref={listRef}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={props?.data}
                keyExtractor={(item) => `${item.key}`}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => {
                                if (index < 3) {
                                    listRef.current?.scrollToIndex({ index: 0, animated: true })
                                } else {
                                    listRef.current?.scrollToIndex({ index: index, animated: true })
                                }

                                setSelectedTab(item.key)
                                props?.onTabChange && props?.onTabChange(item.key)
                            }}
                            style={[
                                styles.itemWrap,
                                {width : WIDTH_SCREEN / props?.data?.length},
                                selectedTab === item.key
                                    ? { borderBottomWidth: 3, borderColor: Colors.purple8D }
                                    : {},
                            ]}
                        >
                            <Text
                                style={[
                                    selectedTab === item.key
                                        ? {...DefaultStyles.textRegular16Black , color : Colors.primary500}
                                        : DefaultStyles.textRegular16Gray,
                                ]}
                            >
                                {item.value}
                            </Text>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

export default Tab

const styles = StyleSheet.create({
    itemWrap: {
        borderBottomWidth: 1,
        paddingHorizontal: scaleModerate(10),
        paddingBottom: scaleModerate(8),
        borderColor: Colors.gray72,
        alignItems: 'center',
    },
})
