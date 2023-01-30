import React, {useMemo} from 'react'
import {ActivityIndicator, View, ViewStyle} from 'react-native'
import {Icon} from 'react-native-elements'

export type DesignIconFamilyType =
  | 'antdesign'
  | 'entypo'
  | 'evilicon'
  | 'feather'
  | 'font-awesome'
  | 'font-awesome-5'
  | 'fontisto'
  | 'foundation'
  | 'ionicon'
  | 'material'
  | 'material-community'
  | 'octicon'
  | 'simple-line-icon'
  | 'zocial'

export interface DesignIconType {
  type: DesignIconFamilyType
  name: string
  color?: string
}

const DesignIcon = ({
  type,
  size,
  name,
  color,
  onPress,
  style,
  disabledStyle,
  isFetching,
  disabled,
}: {
  type: DesignIconFamilyType
  size: number
  name: string
  color?: string
  onPress?: () => void
  style?: ViewStyle
  disabledStyle?: ViewStyle
  isFetching?: boolean
  disabled?: boolean
}) => {
  const defaultDisabledStyle = useMemo(() => {
    return disabledStyle
      ? {...{backgroundColor: 'transparent'}, ...disabledStyle}
      : {opacity: 0.2, backgroundColor: 'transparent'}
  }, [disabledStyle])

  return (
    <View style={style}>
      {isFetching ? (
        <ActivityIndicator color={color} size={size} />
      ) : (
        <Icon
          hitSlop={{bottom: size, left: size, right: size, top: size}}
          disabled={disabled}
          disabledStyle={defaultDisabledStyle}
          type={type}
          name={name}
          size={size}
          color={color}
          onPress={onPress}
        />
      )}
    </View>
  )
}

export default DesignIcon
