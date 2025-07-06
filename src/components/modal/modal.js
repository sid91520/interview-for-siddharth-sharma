import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import DetailRepeat from "../repeatedcomp/detailRepeat";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 544,
  bgcolor: "#FFFFFF",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  '@media (max-width: 600px)': {
    width: '90%',
  },
};

export default function BasicModal({ myLaunchId, openStatus, onClose, data }) {
  const filterSingleProduct = data.find((item) => {
    return item.id === myLaunchId;
  });
  const launchStatus = filterSingleProduct?.upcoming
        ? "Upcoming"
        : filterSingleProduct?.success
        ? "Success"
        : "Failure";
  return (
    <div>
      <Modal
        open={openStatus}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex justify-evenly items-center sm:w-[75%] w-full py-1">
            <div className="w-[72px] h-[72px]">
              <img
                src={filterSingleProduct?.links?.patch?.small}
                className="w-full h-full"
                alt=">>>>"
              />
            </div>
            <div className="flex flex-col items-start">
              <div className="text-xl text-black font-semibold">
                {filterSingleProduct?.name}
              </div>
              <div className="text-xs pb-1 text-black font-semibold">falcon-9</div>
              <div className="flex flex-row">
                <div className="w-[16px] h-[15px] mx-1">
                  <a
                    href={filterSingleProduct?.links?.article}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/images/nasa.svg"
                      className="w-full h-full"
                      alt="article"
                    />
                  </a>
                </div>
                <div className="w-[16px] h-[15px] mx-1">
                  <a
                    href={filterSingleProduct?.links?.wikipedia}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/images/wiki.svg"
                      className="w-full h-full"
                      alt="wikipedia"
                    />
                  </a>
                </div>
                <div className="w-[16px] h-[15px] mx-1">
                  <a
                    href={filterSingleProduct?.links?.webcast}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/images/you.svg"
                      className="w-full h-full"
                      alt="webcast"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className={`w-[70px] py-1 rounded-lg px-2 ${launchStatus==="Upcoming"?'bg-yellow-500':launchStatus==="Success"?'bg-green-600':'bg-red-400'}`}>
                {launchStatus}
            </div>
          </div>
          <div className="w-full text-lg py-2 px-2 text-black pb-4">
              {filterSingleProduct?.details}<p className="text-blue-500 font-semibold"><a
                    href={filterSingleProduct?.links?.wikipedia}
                    target="_blank"
                    rel="noopener noreferrer"
                  >Wikipedia
                  </a>
                </p>
          </div>
          <DetailRepeat filteredlaunch={filterSingleProduct}/>
        </Box>
      </Modal>
    </div>
  );
}
