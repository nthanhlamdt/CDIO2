import React from 'react'

function SelectManagementProject() {
  return (
    <div>
      <div role="tablist" className="tabs tabs-lifted">
        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Dự án" />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          Tab content 1
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Đã giao"
          defaultChecked />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          Tab content 2
        </div>

        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Được giao" />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          Tab content 3
        </div>

        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="" />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          Tab content 3
        </div>
      </div>
    </div>
  )
}

export default SelectManagementProject
