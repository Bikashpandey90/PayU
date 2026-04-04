// import { UserType } from "@/services/auth.service"
// import { ChevronRight, CreditCard, LoaderCircle, ShieldCheck } from "lucide-react"

// const ConfirmPayment = (selectedRecipient: { selectedRecipient: UserType }) => {
//     return (
//         <section className="pt-0 pb-10 px-6 flex flex-col items-center max-w-lg mx-auto min-h-screen">
//             <div className="mb-8 animate-fade-in">
//                 <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary-fixed text-on-secondary-fixed rounded-full">
//                     <span className="material-symbols-outlined text-[18px] text-primary" data-icon="shield_lock" ><ShieldCheck className="h-5 w-5" /></span>
//                     <span className="font-label text-xs text-primary font-semibold tracking-wider uppercase">Secure Transaction</span>
//                 </div>
//             </div>
//             <div className="text-center mb-10">
//                 <h2 className="font-headline text-3xl font-extrabold text-on-surface tracking-tight mb-2">Review &amp; Confirm</h2>
//                 <p className="text-on-surface-variant font-body">Authorize the payment to {selectedRecipient?.name}.</p>
//             </div>
//             <div className="w-full bg-surface-container-lowest rounded-[2rem] p-8 shadow-[0_40px_60px_-15px_rgba(25,28,30,0.06)] mb-8 relative overflow-hidden">
//                 <div className="flex flex-col items-center mb-10 relative">
//                     <div className="w-20 h-20 rounded-3xl flex items-center justify-center mb-4 overflow-hidden">
//                         <img alt={selectedRecipient?.name} className="w-full h-full object-cover" data-alt="Recipient Alex Rivera profile portrait"
//                             src={selectedRecipient?.image || '/images/profile-placeholder.svg'}
//                         />
//                     </div>
//                     <span className="font-label text-xs text-on-surface-variant uppercase tracking-widest mb-1">Sending To</span>
//                     <h3 className="font-headline text-xl font-bold text-on-surface">{selectedRecipient?.name || "Recipient"}</h3>
//                     <p className="text-secondary font-medium text-sm">{selectedRecipient?.email}</p>
//                 </div>
//                 <div className="space-y-4 pt-6 border-t border-outline-variant/20">
//                     <div className="flex justify-between items-center">
//                         <span className="text-on-surface-variant font-body">Amount</span>
//                         <span className="font-headline text-lg font-bold text-on-surface">Rs {amount}</span>
//                     </div>
//                     <div className="flex justify-between items-center">
//                         <span className="text-on-surface-variant font-body">Transaction Fee</span>
//                         <span className="font-body text-secondary font-semibold">Free</span>
//                     </div>
//                     <div className="pt-4 mt-4 border-t border-dashed border-outline-variant/40 flex justify-between items-center">
//                         <span className="font-headline text-xl font-extrabold text-on-surface">Total Amount</span>
//                         <span className="font-headline text-2xl font-black text-primary">Rs {amount}</span>
//                     </div>
//                 </div>
//             </div>
//             <div className="w-full bg-surface-container-low rounded-2xl p-4 flex items-center gap-4 mb-10">
//                 <div className="bg-primary/80 text-on-tertiary-container w-12 h-10 rounded-lg flex items-center justify-center">
//                     <span className="material-symbols-outlined" data-icon="credit_card"><CreditCard className="h-7 w-7" /></span>
//                 </div>
//                 <div className="flex-1">
//                     <p className="text-xs font-label text-on-surface-variant uppercase tracking-tighter">Funding Source</p>
//                     <p className="font-body font-semibold text-on-surface">PayU Wallet •••• 8829</p>
//                 </div>
//                 <button className="text-primary font-bold text-sm hover:underline">Edit</button>
//             </div>
//             <div className="w-full relative group">
//                 <div className="w-full relative">
//                     <div
//                         ref={sliderRef}
//                         className="h-20 bg-primary/80 rounded-full p-2 flex items-center relative overflow-hidden shadow-lg"
//                         onMouseMove={handleDrag}
//                         onMouseUp={handleEnd}
//                         onMouseLeave={handleEnd}
//                         onTouchMove={handleDrag}
//                         onTouchEnd={handleEnd}
//                     >
//                         {/* Background fill */}
//                         <div
//                             className="absolute left-0 top-0 h-full bg-gradient-to-r from-secondary-container to-primary opacity-20 transition-all"
//                             style={{ width: sliderX + 64 }}
//                         />

//                         {/* Text */}
//                         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//                             <span className="text-on-primary font-bold text-sm tracking-widest opacity-50 uppercase">
//                                 {isCompleted ? "Authorized" : "Slide to Authorize"}
//                             </span>
//                         </div>

//                         {/* Knob */}
//                         <div
//                             onMouseDown={() => setIsDragging(true)}
//                             onTouchStart={() => setIsDragging(true)}
//                             className="h-16 w-16 bg-white rounded-full flex items-center justify-center text-primary shadow-xl absolute z-10 cursor-pointer"
//                             style={{ transform: `translateX(${sliderX}px)` }}
//                         >
//                             <ChevronRight className="h-6 w-6" />
//                         </div>
//                     </div>
//                 </div>
//                 <button
//                     disabled={!isCompleted}
//                     onClick={() => {
//                         handleConfirmPayment()
//                     }} className="mt-6 w-full py-5 bg-primary text-center text-on-primary font-headline font-extrabold rounded-2xl shadow-xl active:scale-95 transition-all duration-200">
//                     {loading ? (<LoaderCircle className="h-6 w-6 animate-spin flex justify-self-center" />) : "Confirm Payment"}
//                 </button>
//             </div>
//             <button
//                 onClick={cancelTransaction}
//                 className="mt-8 text-on-surface-variant font-label text-sm font-semibold hover:text-error transition-colors">
//                 Cancel
//             </button>
//         </section>
//     )
// }