export default function ProductCategory() {
  return (
    <div className="grid-container-8">
      <div className="gridCont">
        <div>
          <img src="../../../public/assets/shopTureB.png" alt="kid-image" />
        </div>
        <div className="gridContText">
          <p>Kids</p>
          <span></span>
        </div>
      </div>
      <div className="gridCont">
        <div className="gridContText">
          <p>Office Wear</p>
          <span></span>
        </div>
        <div>
          <img
            src="../../../public/assets/shopTureB.png"
            alt="office-wear-image"
          />
        </div>
      </div>
      <div className="gridCont">
        <div>
          <img
            src="../../../public/assets/shopTureB.png"
            alt="work-wear-image"
          />
        </div>
        <div className="gridContText">
          <p>Work Wear</p>
          <span></span>
        </div>
      </div>
      <div className="gridCont">
        <div className="gridContText">
          <p>Adults</p>
          <span></span>
        </div>
        <div>
          <img src="../../../public/assets/shopTureB.png" alt="adults-image" />
        </div>
      </div>
    </div>
  );
}
