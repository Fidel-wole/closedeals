import CallModel from '../models/call';

class CallService {
    async startCall(data: any) {
        const call = new CallModel(data);
        return await call.save();
    }

    async getCall(id: string) {
        return await CallModel.findById(id);
    }
    async endCall(callId: string) {
        const call = await CallModel.findById(callId);
        if (call) {
            call.endTime = new Date();
            call.duration = (call.endTime.getTime() - call.startTime.getTime()) / 1000; // Convert to seconds
            await call.save();
    
            // Update Prospect with total call duration and count
        //     await Prospect.findByIdAndUpdate(call.prospectId, {
        //         $inc: { totalCalls: 1, totalDuration: call.duration },
        //     });
        // }
    }
}
}
export default new CallService();
