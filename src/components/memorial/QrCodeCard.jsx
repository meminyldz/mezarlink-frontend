import { QRCodeCanvas } from "qrcode.react";

// `slug`'a göre /m/:slug adresine giden QR kod üretir.
// Mezar taşına yapıştırılacak fiziksel etiket için PNG indirme imkanı sunar.
function QrCodeCard({ slug, fullName }) {
  const memorialUrl = `https://www.mezarlink.com/m/${slug}`;

  const handleDownload = () => {
    const canvas = document.getElementById(`qr-${slug}`);
    if (!canvas) return;

    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = url;
    link.download = `mezarlink-qr-${slug}.png`;
    link.click();
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm p-6 flex flex-col items-center text-center">
      <QRCodeCanvas
        id={`qr-${slug}`}
        value={memorialUrl}
        size={180}
        level="H"
        includeMargin
      />

      <p className="mt-4 font-medium">{fullName}</p>
      <p className="text-gray-400 text-sm break-all">{memorialUrl}</p>

      <button
        onClick={handleDownload}
        className="mt-5 border px-5 py-3 rounded-xl hover:bg-gray-50 transition text-sm font-medium"
      >
        QR Kodu İndir
      </button>
    </div>
  );
}

export default QrCodeCard;
