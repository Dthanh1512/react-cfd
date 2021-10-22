
import Faqpage from "./components/Faqpage"

function Faq() {
    return (
        <main className="faqpage" id="main">
            <div className="container">
                <section>
                    <h2 className="main-title">Câu hỏi thường gặp</h2>
                    <div className="row">
                        <Faqpage
                            title="THÔNG TIN CHUNG" />
                        <Faqpage
                            title="ĐĂNG KÍ, THANH TOÁN VÀ ĐIỂM THƯỞNG" />
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Faq