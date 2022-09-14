import React, { useMemo } from 'react'

import CustomSelect from '../components/CustomSelect'
import { MinutesProps } from '../types'
import { DEFAULT_LOCALE_EN } from '../locale'
import { classNames } from '../utils'
import { UNITS } from '../constants'
import { Typography } from "@mui/material"

export default function Minutes(props: MinutesProps) {
  const {
    value,
    setValue,
    locale,
    className,
    disabled,
    readOnly,
    leadingZero,
    clockFormat,
    period,
    ...selectProps
  } = props
  const internalClassName = useMemo(
    () =>
      classNames({
        'react-js-cron-field': true,
        'react-js-cron-minutes': true,
        [`${className}-field`]: !!className,
        [`${className}-minutes`]: !!className,
      }),
    [className]
  )

  return (
    <div className={internalClassName}>
      {period === 'hour'
        ? locale.prefixMinutesForHourPeriod !== '' && (
            <Typography>
              {locale.prefixMinutesForHourPeriod ||
                DEFAULT_LOCALE_EN.prefixMinutesForHourPeriod}
            </Typography>
          )
        : locale.prefixMinutes !== '' && (
            <Typography>
              {locale.prefixMinutes || DEFAULT_LOCALE_EN.prefixMinutes}
            </Typography>
          )}

      <CustomSelect
        placeholder={
          period === 'hour'
            ? locale.emptyMinutesForHourPeriod ||
              DEFAULT_LOCALE_EN.emptyMinutesForHourPeriod
            : locale.emptyMinutes || DEFAULT_LOCALE_EN.emptyMinutes
        }
        value={value}
        unit={UNITS[0]}
        setValue={setValue}
        locale={locale}
        className={className}
        disabled={disabled}
        readOnly={readOnly}
        leadingZero={leadingZero}
        clockFormat={clockFormat}
        period={period}
        {...selectProps}
      />

      {period === 'hour' && locale.suffixMinutesForHourPeriod !== '' && (
        <Typography>
          {locale.suffixMinutesForHourPeriod ||
            DEFAULT_LOCALE_EN.suffixMinutesForHourPeriod}
        </Typography>
      )}
    </div>
  )
}
