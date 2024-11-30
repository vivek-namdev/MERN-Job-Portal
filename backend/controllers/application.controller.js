import { Job } from "../models/job.model.js";

export const applyJob = async (req, res) => {
    try {
        const userId = req.body;
        const jobId = req.params.id;

        if(!jobId) {
            return res.status(400).json({
                message: "Job id isrequired.",
                success: false
            })
        }

        const existingApplication = await application.findOne({job: jobId, applicant: userId});

        if(existingApplication) {
            return res.status(400).json({
                message: "You have already applied for this jobs",
                success: false
            })
        }
    } catch (error) {
        console.log(error);
    }
}