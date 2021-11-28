import React from 'react'
import './styles.css'
// import FirstPageIcon from '@material-ui/icons/FirstPage'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { NUM_ITEMS_ON_PAGE } from '../../../../constants'
// import LastPageIcon from '@material-ui/icons/LastPage'

export type PaginationMenuProps = {
  setPageCountSelectHandler: (page: number) => void
  pageCountSelect: number
  itemsTotalCount: number
}

export const PaginationMenu: React.FC<PaginationMenuProps> = ({
  setPageCountSelectHandler,
  pageCountSelect,
  itemsTotalCount,
}) => {
  const pagesCount = Math.ceil(itemsTotalCount / NUM_ITEMS_ON_PAGE)
  const spanItem = []
  for (let i = 0; i < pagesCount; i += 1) spanItem.push(i)
  const dotWidth = 800 / pagesCount

  return (
    <div className="short-event-card-pages-container">
      <div className="short-event-card-pages">
        {pagesCount > 3 && (
          <span
            className="short-event-card-pages--span"
            role="button"
            tabIndex={0}
            onClick={() => {
              setPageCountSelectHandler(
                pageCountSelect > 0 ? pageCountSelect - 1 : 0
              )
            }}
          >
            <NavigateBeforeIcon />
          </span>
        )}
        {spanItem.map(
          (item) =>
            ((pagesCount < 16 ||
              item < 3 ||
              (pageCountSelect < 6 && item < 8) ||
              (pageCountSelect > pagesCount - 7 && item > pagesCount - 9) ||
              pagesCount - 4 < item ||
              (item - 3 < pageCountSelect && item + 3 > pageCountSelect)) && (
              <span
                key={`page-${pagesCount}-${item}`}
                className={`short-event-card-pages--span 
            ${pageCountSelect === item ? 'active' : ''}`}
                role="button"
                tabIndex={item}
                onClick={() => {
                  setPageCountSelectHandler(item)
                }}
              >
                {item + 1}
              </span>
            )) || (
              <span
                className="card-pages-dot"
                style={{ width: `${dotWidth}px` }}
              >
                {' '}
              </span>
            )
        )}
        {pagesCount > 3 && (
          <span
            className="short-event-card-pages--span"
            role="button"
            tabIndex={0}
            onClick={() => {
              setPageCountSelectHandler(
                pageCountSelect < pagesCount - 1
                  ? pageCountSelect + 1
                  : pagesCount - 1
              )
            }}
          >
            <NavigateNextIcon />
          </span>
        )}
      </div>
    </div>
  )
}
