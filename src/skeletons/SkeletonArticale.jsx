import React from 'react'
import Shimmer from './Shimmer'
import SkeletonElement from './SkeletonElement'

const SkeletonArticale = ({ theme }) => {

  const colorTheme = theme || 'light'
  return (
    <div className={`sekeleton-wrapper ${colorTheme}`}>
        <div className="skeleton-articale">
            <SkeletonElement type='title'/>
            <SkeletonElement type='text'/>
            <SkeletonElement type='text'/>
            <SkeletonElement type='text'/>
        </div>
        <Shimmer/>
    </div>
  )
}

export default SkeletonArticale